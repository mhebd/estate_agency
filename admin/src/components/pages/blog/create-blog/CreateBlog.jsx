/* eslint-disable eqeqeq */
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useLocation } from 'react-router-dom';
import createData from '../../../../utility/createData';
import fetchData from '../../../../utility/fetchData';
import getHtmlToDraft from '../../../../utility/getHtmlToDraft';
import updateData from '../../../../utility/updateData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Loading from '../../../reusable/Loading';
import PageHeader from '../../../reusable/PageHeader';
import Error from '../../not-found/Error';

function CreateBlog() {
  const dataObj = {
    title: '',
    author: '',
    category: '',
  };
  const [data, setData] = useState(dataObj);
  const [coverImage, setCoverImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(EditorState.createEmpty());

  const { id } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        const fetchPost = await fetchData(`/api/v1/news/${id}`);
        setData(fetchPost.data);
        setContent(getHtmlToDraft(fetchPost.data?.content));
        setIsLoading(false);
      })();
    }
  }, [id]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onEditorStateChange = (state) => setContent(state);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      'dataJson',
      JSON.stringify({ ...data, content: draftToHtml(convertToRaw(content.getCurrentContent())) })
    );
    if (coverImage) formData.append('coverImage', coverImage);

    if (id) {
      if (await updateData(`/api/v1/news/${id}`, formData));
    } else if (await createData('/api/v1/news', formData)) setData(dataObj);
  };

  if (isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader
        title="Add New Blog"
        btnLink="/dashboard/blog"
        btnText="Go Back"
        icon="arrow-left"
      />
      <CardLayout title={id ? 'Update A Blog' : 'Create A New Blog'}>
        <form action="/" encType="multipart/formdata" onSubmit={submitHandler} className="form">
          <div className="mb-3">
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Post title"
              className=""
              label="Post Title"
              changeHandler={changeHandler}
              value={data.title}
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                id="author"
                name="author"
                placeholder="Enter Post author"
                className=""
                label="Post Author"
                changeHandler={changeHandler}
                value={data.author}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="Enter Post category"
                className=""
                label="Post category"
                changeHandler={changeHandler}
                value={data.category}
              />
            </div>
          </div>

          <div className="mb-5">
            <Input
              type="file"
              id="coverImage"
              name="coverImage"
              placeholder=""
              className=""
              label="Post Cover Image"
              changeHandler={(e) => setCoverImage(e.target.files[0])}
            />
          </div>

          <div className="pb-4">
            <Editor
              editorState={content}
              wrapperClassName="editor-wrap"
              editorClassName="editor"
              onEditorStateChange={onEditorStateChange}
            />
          </div>

          <div className="mb-3">
            <Button type="submit">{id ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateBlog;

import { ContentState, EditorState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

const getHtmlToDraft = (content) => {
  const blocksFromHtml = htmlToDraft(content);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  return EditorState.createWithContent(contentState);
};

export default getHtmlToDraft;

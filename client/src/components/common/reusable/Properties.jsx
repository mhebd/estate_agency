import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import PageHeader from './PageHeader';
import Paginate from './Paginate';
import PropertyCard from './PropertyCard';

function Properties({ url, pageHeading }) {
  const itemPerPage = 12;
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(itemPerPage);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`${url}?page=${activePage}&limit=${itemPerPage}`);
      setProperties(res.data.result.data);
      setTotalItem(res.data.result.dataCount);
      setLoading(false);
    })();
  }, [activePage, url]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="property-grid-section">
        <div className="container">
          {pageHeading && <PageHeader heading="Our Amazing Properties" page="property" />}

          <div className="grid-properties">
            <div className="row">
              {properties &&
                properties?.map((property) => (
                  <div className="col-md-4 mb-4">
                    <PropertyCard property={property} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Paginate
        activePage={activePage}
        itemPerPage={itemPerPage}
        totalItem={totalItem}
        onChange={setActivePage}
      />
    </>
  );
}

export default Properties;

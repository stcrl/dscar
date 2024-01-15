import SearchBtn from 'components/SearchBtn';

import CatalogCard from 'components/CatalogCard';

const Catalog = () => {
  return (
    <>
      <SearchBtn />
      <div className="row">
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6  col-lg-4">
          <CatalogCard />
        </div>
        <div className="col-sm-6   col-lg-4">
          <CatalogCard />
        </div>
      </div>
    </>
  );
};

export default Catalog;

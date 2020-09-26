import React, { useState } from "react";

function BrowseDropdown() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex items-center ml-2">
      <div>
        <Browse />
        <Dropdown show={true} />
      </div>
    </div>
  );
}

const Browse = () => (
  <div className="cursor-pointer hover:text-red-500">Browse</div>
);

type DropdownProps = {
  show: boolean;
};

function Dropdown(props: DropdownProps) {
  const { show } = props;

  return (
    <div className="absolute px-4 py-2 mt-4 bg-white border rounded shadow">
      <div className=""> </div>
    </div>
  );
}

export default BrowseDropdown;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllPins, deleteAPin, selectMyPins } from "../../../store/pin";
import GridLayout from "../../GridLayout";
import { AddPinningControls } from "../../PinterestLayout";

function PinPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pins = useSelector(selectMyPins);

  useEffect(() => {
    dispatch(getAllPins());
  }, [dispatch]);

  const navigateToCreatePinForm = async (e) => {
    history.push("/pinform");
  };

  const navigateToPinPage = (pin) => {
    history.push(`/pins/${pin.id}`);
  };

  return (
    <div>
      <div>
        <h1>PINS I'VE CREATED</h1>
        <button className="create-button" onClick={navigateToCreatePinForm}>
          Create Pin
        </button>
        <GridLayout
          items={pins}
          onItemClick={navigateToPinPage}
          renderItemActions={(pin, closeActionPopOver) => (
            <>
              <AddPinningControls
                pin={pin}
                onPinningDone={closeActionPopOver}
              />
              <button
                className="regular-button"
                onClick={() => {
                  dispatch(deleteAPin(pin.id));
                  closeActionPopOver();
                }}
              >
                Delete
              </button>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default PinPage;

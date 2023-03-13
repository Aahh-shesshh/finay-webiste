import React, { useState } from "react";
import Button from "../../../components/buttons/Button";
import BackStage from "../const-components/Caurosel";
import { ImCross } from "react-icons/im";

const Account = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);

  const handleClickDeactivate = () => {
    return setDeleteAcc(false), setShowModal(true);
  };
  const handleClickDelete = () => {
    return setDeleteAcc(true), setShowModal(false);
  };


  const switchAccountModal = () => {
    return (
      <BackStage>
        <div className="acc-switch">
          <div className="flex flex-row gap-[80px]">
            <h4>Account Switch</h4>{" "}
            <ImCross
              className="cross-sign"
              onClick={() => setShowModal(false)}
            />
          </div>
          <h5>Switch to Fan Account</h5>
          <hr />
          <h5>Switch to Artist Account</h5>
          <hr />
        </div>
      </BackStage>
    );
  };
  const deleteAccount = () => {
    return (
      <BackStage>
        <div className="acc-switch">
          <div className="flex flex-row gap-[80px]">
            <h4>Account Deletion</h4>{" "}
            <ImCross
              className="cross-sign"
              onClick={() => setDeleteAcc(false)}
            />
          </div>
          <div className="information">
            <h5>Deactivating your account is temporary</h5>
            <p>
              Your profile, photos, posts, musics, comments, linkes will be
              hiddenuntil you enable it by logging back in.
            </p>
          </div>
          <hr />
          <div className="information">
            <h5>Deleting your account is temporary</h5>
            <p>
              Your profile, photos, posts, musics, comments, linkes, supporters
              will be permanently deleted.
            </p>
          </div>
          <div className="flex flex-row gap-[30px]">
            <Button buttonText="Deactivate" className="deactivate-btn" />{" "}
            <Button buttonText="Delete" className="delete-btn" />
          </div>
        </div>
      </BackStage>
    );
  };

  return (
    <div className="account">
      {showModal ? <BackStage>{switchAccountModal()}</BackStage> : null}
      {deleteAcc ? <BackStage>{deleteAccount()}</BackStage> : null}
      <h4>Account</h4>
      <div className="form">
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>Name</p>
            <input placeholder="Name"></input>
          </div>
          <div className="input-details">
            <p>Email</p>
            <input placeholder="Name"></input>
          </div>
          <div className="input-details">
            <p>Gender</p>
            <input placeholder="Male"></input>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>Username</p>
            <input placeholder=""></input>
          </div>
          <div className="input-details">
            <p>Phone</p>
            <input placeholder=""></input>
          </div>
          <div className="input-details">
            <p>Birthday</p>
            <div className="input">Ashish Khatri</div>
          </div>
        </div>
      </div>
      <Button buttonText="Save" className="Save-btn" />
      <h4 className="mt-[40px]">Related</h4>
      <h5 onClick={() => handleClickDeactivate()}>Switch account type</h5>
      <p className="p" onClick={() => handleClickDelete()}>
        Delete account
      </p>
    </div>
  );
};

export default Account;

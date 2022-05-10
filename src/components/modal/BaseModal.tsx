/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Icons } from "../../components/elements/icon/Icons";
import Colors from '../../assets/style/Colors';
import { Icon } from 'react-materialize';
import UploadComps from '../modal/comps/UploadComps';
import CreateComps from '../modal/comps/CreateComps';
import EditComps from '../modal/comps/EditComps';
import AddCompany from './comps/AddCompany';
import AddPerson from './comps/AddPerson';
import SendInvite from './comps/SendInvite';
import DeleteConfirm from './comps/DeleteConfirm';
import ResetPassword from './comps/ResetPassword';
import AddPromoCode from './comps/AddPromoCode';
import ClosingProperty from './comps/ClosingProperty';
import UploadFile from './comps/UploadFile';
import NewEvaluaton from './comps/NewEvaluaton';
import ImageModal from './comps/ImageModal';
import SalesApproach from './comps/SalesApproach';
import CompleteReview from './comps/CompleteReview';
import AddNewComp from './comps/AddNewComp';
import ViewImage from './comps/ViewImage';




const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '10px',
  width: '100%',
  padding: '0px',
  maxHeight: '85vh',
  // overflowY: 'auto',
  maxWidth: '56vw',
};
const smModalStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '10px',
  width: '100%',
  padding: '0px',
  maxHeight: '85vh',
  // overflowY: 'auto',
  maxWidth: '32vw',
};
const lgModalStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '10px',
  width: '100%',
  padding: '0px',
  maxHeight: '85vh',
  // overflowY: 'auto',
  maxWidth: '75vw',

};
const Title = styled.div`
  font-size: 24px;
  color: ${Colors.black};
  font-family: 'roboto_slabbold';
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
const CloseIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${Colors.lightblue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  &:before{
    position: absolute;
    content: "";
    width: 15px;
    height: 2px;
    background-color: ${Colors.white};
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
  }
  &:after{
    position: absolute;
    content: "";
    width: 15px;
    height: 2px;
    background-color: ${Colors.white};
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
  }
  svg{
    color: ${Colors.blue} !important;
    font-size: 13px !important;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:12px 20px;
  border-bottom: 2px solid ${Colors.lightblue1};
  
`;
export const ModalList = Object.freeze({
  UploadComps: 'Upload Comps',
  CreateComps: 'Create Comps',
  EditComps: 'Edit Comps',
  AddCompany: 'Add Company',
  AddPerson: 'Add Person',
  SendInvite: 'Send Invite',
  DeleteConfirm: 'Delete ',
  ResetPassword: 'Reset Password ',
  AddPromoCode: 'Add Promo Code ',
  ClosingProperty: 'Closing a property?',
  UploadFile: 'Upload File',
  NewEvaluaton: 'Create New Evaluation',
  ImageModal: 'Add A Property Image',
  SalesApproach: 'Sales Approach Weight',
  CompleteReview: 'Complete Final Review',
  AddNewComp: 'Advanced Filter',
  ViewImage: 'Image View',

});   

export default function BaseModal({
  open, modalType, subTitle, onClose,isBigmodal=false, showHeading = true,isConfirmationModal=false, ...rest
}: any): any {
  const renderModal = (modalType: any, close: any) => {
    switch (modalType) {

      case ModalList.UploadComps:
        return <UploadComps close={close} {...rest} />;
      case ModalList.CreateComps:
        return <CreateComps close={close} {...rest} />;
      case ModalList.EditComps:
        return <EditComps close={close} {...rest} />;
      case ModalList.AddCompany:
        return <AddCompany close={close} {...rest} />;
      case ModalList.AddPerson:
        return <AddPerson close={close} {...rest} />;
      case ModalList.SendInvite:
        return <SendInvite close={close} {...rest} />;
      case ModalList.DeleteConfirm:
        return <DeleteConfirm close={close} {...rest} />;
      case ModalList.ResetPassword:
        return <ResetPassword close={close} {...rest} />;
      case ModalList.AddPromoCode:
        return <AddPromoCode close={close} {...rest} />;
      case ModalList.ClosingProperty:
        return <ClosingProperty close={close} {...rest} />;
      case ModalList.UploadFile:
        return <UploadFile close={close} {...rest} />;
      case ModalList.NewEvaluaton:
        return <NewEvaluaton close={close} {...rest} />;
      case ModalList.ImageModal:
        return <ImageModal close={close} {...rest} />;
      case ModalList.SalesApproach:
        return <SalesApproach close={close} {...rest} />;
      case ModalList.CompleteReview:
        return <CompleteReview close={close} {...rest} />;
      case ModalList.AddNewComp:
        return <AddNewComp close={close} {...rest} />;
      case ModalList.ViewImage:
        return <ViewImage close={close} {...rest} />;
      
      default:
        return null;
    }
  };



  useEffect(() => {
    const HamBergerElement = document.getElementById('hamberger');

    if (HamBergerElement?.style) {
      if (open) {
        HamBergerElement.style.zIndex = '1';
      } else {
        HamBergerElement.style.zIndex = '20';
      }
    }
  }, [open, modalType]);

  return (
    <Popup className="commonPopup"
      modal
      open={open}
      closeOnDocumentClick={false}
      onClose={() => onClose(false)}
      contentStyle={isBigmodal?lgModalStyle:(isConfirmationModal?smModalStyle:modalStyle) as any}

    >
      {(close: any) => (
        <>
          {showHeading &&  <Header>
            <Title>{modalType}</Title>
            <CloseIcon onClick={() => close()}> 
            {/* {Icons.TimesSolid} */}
              {/* <Icon
                icon={Icons.TimesSolid}
                size={18}                
              /> */}
            </CloseIcon>
 
          </Header>
          }
          {renderModal(modalType, close)}
        </>
      )}
    </Popup>
  );
}

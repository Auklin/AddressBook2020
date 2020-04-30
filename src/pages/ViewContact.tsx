import React, { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonInput,
  IonItemDivider,
  IonText,
  IonThumbnail,
  IonImg
} from '@ionic/react';
import { personCircle, text } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewContact.css';

interface ViewContactProps extends RouteComponentProps<{ id: string; }> { }

const ViewContact: React.FC<ViewContactProps> = ({ match }) => {

  const [message, setMessage] = useState<Message>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(match.params.id, 10));
    setMessage(msg);
  });
  
  const [firstNameText, setFirstNameText] = useState<string>();
  const [lastNameText, setLastNameText] = useState<string>();
  const [phoneNumberText, setPhoneNumberText] = useState<string>();
  const [emailText, setEmailText] = useState<string>();
  
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Address Book" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {message.firstName} {message.lastName}
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">

            <IonItem>
              <IonThumbnail slot="start">
                <IonImg src={message.photo} />
              </IonThumbnail>
            </IonItem>

            <IonLabel position="stacked">First Name </IonLabel>
            <IonItem>
              <IonInput value={firstNameText} placeholder={message.firstName} onIonChange={e => setFirstNameText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Last Name </IonLabel>
            <IonItem>
              <IonInput value={lastNameText} placeholder={message.lastName} onIonChange={e => setLastNameText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Phone Number </IonLabel>
            <IonItem>
              <IonInput value={phoneNumberText} type="number" placeholder={message.phoneNumber} onIonChange={e => setPhoneNumberText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonItem>
              <IonInput value={emailText} placeholder={message.email} onIonChange={e => setEmailText(e.detail.value!)}></IonInput>
            </IonItem>
            
            </div>
          </>
        ) : <div>Message not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewContact;

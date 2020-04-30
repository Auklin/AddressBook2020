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
  IonText
} from '@ionic/react';
import { personCircle, text } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewMessage.css';

interface ViewMessageProps extends RouteComponentProps<{ id: string; }> { }

const ViewMessage: React.FC<ViewMessageProps> = ({ match }) => {

  const [message, setMessage] = useState<Message>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(match.params.id, 10));
    setMessage(msg);
  });

  const [text, setText] = useState<string>();

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

            <IonLabel position="stacked">First Name </IonLabel>
            <IonItem>
              <IonInput value={message.firstName} placeholder="e.g. Jamie" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Last Name </IonLabel>
            <IonItem>
              <IonInput value={message.lastName} placeholder="e.g. Jamie" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Phone Number </IonLabel>
            <IonItem>
              <IonInput value={message.phoneNumber} type="number" placeholder="Phone Number" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonItem>
              <IonInput value={message.email} type="email" placeholder="Email" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            
            </div>
          </>
        ) : <div>Message not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewMessage;

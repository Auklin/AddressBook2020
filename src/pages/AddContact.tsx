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
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonInput,
  IonButton,

} from '@ionic/react';
import { personCircle, text } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './AddContact.css';

interface AddContactProps extends RouteComponentProps<{ id: string; }> { }

const AddContact: React.FC<AddContactProps> = ({ match }) => {

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
              <IonItem>
                <IonIcon icon={personCircle} color="primary"></IonIcon>
                <IonLabel className="ion-text-wrap">
                  <h2>
                    Add Contact
                  </h2>
                </IonLabel>
              </IonItem>
  
              <div className="ion-padding">
  
              <IonLabel position="stacked">First Name </IonLabel>
              <IonItem>
                <IonInput placeholder="First Name" onIonChange={e => setFirstNameText(e.detail.value!)}></IonInput>
              </IonItem>
              <IonLabel position="stacked">Last Name </IonLabel>
              <IonItem>
                <IonInput placeholder="Last Name" onIonChange={e => setLastNameText(e.detail.value!)}></IonInput>
              </IonItem>
              <IonLabel position="stacked">Phone Number </IonLabel>
              <IonItem>
              <IonInput value={phoneNumberText} type="number" placeholder="Phone Number" onIonChange={e => setPhoneNumberText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonItem>
              <IonInput value={emailText} type="email" placeholder="Email" onIonChange={e => setEmailText(e.detail.value!)}></IonInput>
            </IonItem>
              </div>

            <IonButton>
                Save Contact
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AddContact;
  
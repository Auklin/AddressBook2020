import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import './ContactListItem.css';

interface ContactListItemProps {
  message: Message;
}

const ContactListItem: React.FC<ContactListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.firstName} {message.lastName}
          <span className="date">
            <IonNote>{message.email}</IonNote>
          </span>
        </h2>
        <h3>{message.phoneNumber}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default ContactListItem;

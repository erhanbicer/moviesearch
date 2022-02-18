import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';

export class Messaging {
  private static instance: Messaging;
  private messagingRef!: ReturnType<typeof messaging>;

  private constructor() {}

  static getInstance() {
    if (!Messaging.instance) {
      Messaging.instance = new Messaging();
    }

    return Messaging.instance;
  }

  static async initialize() {
    const instance = Messaging.getInstance();
    await instance.initialize();
    return instance;
  }

  private async initialize() {
    this.messagingRef = messaging();
    if (Platform.OS === 'ios') {
      await Messaging.requestIOSPermission();
    }

    this.messageListener();
    return this.messagingRef;
  }

  private static async requestIOSPermission() {
    await messaging().requestPermission();
  }

  private messageListener() {
    this.messagingRef.onMessage(Messaging.onMessageReceived);
    this.messagingRef.setBackgroundMessageHandler(Messaging.onMessageReceived);
  }

  private static async onMessageReceived(
    message: FirebaseMessagingTypes.RemoteMessage,
  ) {
    await Messaging.onDisplayNotification({
      title: message.notification?.title ?? '',
      body: message.notification?.body ?? '',
    });
  }

  public static async onDisplayNotification({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
    });

    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
      },
    });
  }
}

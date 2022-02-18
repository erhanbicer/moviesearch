import { utils } from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import { RootStackParamList } from '@router/AppStackNavigator';

interface ILogEvent {
  movie_detail: {
    imdbID: string;
    title: string;
    year: string;
  };
}

export class Analytics {
  private static instance: Analytics;
  private analyticsRef!: ReturnType<typeof analytics>;

  private constructor() {}

  static getInstance() {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }

    return Analytics.instance;
  }

  /**
   * Analytics'e veri gönderilmek istenmediğinde `debugMode` true ayarlanmalıdır
   * @param debugMode
   */
  static async initialize(debugMode = false) {
    const instance = Analytics.getInstance();
    await instance.initialize(debugMode);
    return instance;
  }

  private async initialize(debugMode: boolean) {
    this.analyticsRef = analytics();

    let isRunningInTestLab = utils().isRunningInTestLab || debugMode;
    await this.analyticsRef.setAnalyticsCollectionEnabled(!isRunningInTestLab);

    return this.analyticsRef;
  }

  public async setCurrentScreen<T extends keyof RootStackParamList>(
    screenName: T,
  ) {
    await this.analyticsRef.logScreenView({
      screen_class: screenName,
      screen_name: screenName,
    });
  }

  public async logEvent<T extends keyof ILogEvent>(
    eventName: T,
    logObject: ILogEvent[T],
  ) {
    await this.analyticsRef.logEvent(eventName, logObject);
  }
}

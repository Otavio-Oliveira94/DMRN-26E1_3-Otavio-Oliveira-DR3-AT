import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestPermissionsAsync() {
  try {
    if (!Device.isDevice) {
      return { granted: false, message: 'Not a physical device' };
    }
    const { status } = await Notifications.requestPermissionsAsync();
    return { granted: status === 'granted' };
  } catch (error) {
    return { granted: false, error };
  }
}

export async function scheduleOrderStatusNotification(
  orderId,
  status,
  secondsFromNow = 5
) {
  try {
    const trigger = { seconds: Math.max(1, Math.floor(secondsFromNow)) };
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: `Pedido ${orderId}`,
        body: `Status: ${status}`,
        data: { orderId, status },
      },
      trigger,
    });
    return { success: true, id };
  } catch (error) {
    return { success: false, error };
  }
}

export async function cancelAllScheduledNotifications() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

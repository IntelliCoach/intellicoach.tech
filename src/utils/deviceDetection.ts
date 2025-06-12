export enum DeviceType {
  IOS = "ios",
  ANDROID = "android",
  OTHER = "other",
}

export const getDeviceType = () => {
  if (typeof window === "undefined") return null; // SSR safety

  const userAgent = window.navigator.userAgent;

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return DeviceType.IOS;
  } else if (/Android/.test(userAgent)) {
    return DeviceType.ANDROID;
  }
  return DeviceType.OTHER;
};

// More detailed detection
export const getDetailedDeviceInfo = () => {
  if (typeof window === "undefined") return null;

  const userAgent = window.navigator.userAgent;

  return {
    isIOS: /iPad|iPhone|iPod/.test(userAgent),
    isAndroid: /Android/.test(userAgent),
    isMobile: /Mobi|Android/i.test(userAgent),
    isTablet:
      /iPad/.test(userAgent) ||
      (/Android/.test(userAgent) && !/Mobi/.test(userAgent)),
  };
};

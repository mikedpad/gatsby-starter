const mqWidth = {
  mobile: `320px`,
  mobileLarge: `400px`,
  tablet: `768px`,
  laptop: `1024px`,
  desktop: `1440px`,
  desktopFHD: `1920px`,
};

const mqHeight = {
  mobile: `320px`,
  mobileLarge: `400px`,
  tablet: `768px`,
  laptop: `1024px`,
};

export const minWidth = {
  mobile: `min-width: ${mqWidth.mobile}`,
  mobileLarge: `min-width: ${mqWidth.mobileLarge}`,
  tablet: `min-width: ${mqWidth.tablet}`,
  laptop: `min-width: ${mqWidth.laptop}`,
  desktop: `min-width: ${mqWidth.desktop}`,
  desktopFHD: `min-width: ${mqWidth.desktopFHD}`,
};

export const maxWidth = {
  mobile: `max-width: ${mqWidth.mobile}`,
  mobileLarge: `max-width: ${mqWidth.mobileLarge}`,
  tablet: `max-width: ${mqWidth.tablet}`,
  laptop: `max-width: ${mqWidth.laptop}`,
  desktop: `max-width: ${mqWidth.desktop}`,
  desktopFHD: `max-width: ${mqWidth.desktopFHD}`,
};

export const minHeight = {
  mobile: `min-height: ${mqHeight.mobile}`,
  mobileLarge: `min-height: ${mqHeight.mobileLarge}`,
  tablet: `min-height: ${mqHeight.tablet}`,
  laptop: `min-height: ${mqHeight.laptop}`,
};

export const maxHeight = {
  mobile: `max-height: ${mqHeight.mobile}`,
  mobileLarge: `max-height: ${mqHeight.mobileLarge}`,
  tablet: `max-height: ${mqHeight.tablet}`,
  laptop: `max-height: ${mqHeight.laptop}`,
};

export const portraitOnly = `orientation: portrait`;
export const landscapeOnly = `orientation: landscape`;

export const portrait = {
  small: `(${portraitOnly}) and (${minWidth.mobile})`,
  medium: `(${portraitOnly}) and (${minWidth.mobileLarge})`,
  large: `(${portraitOnly}) and (${minWidth.tablet})`,
};

export const landscape = {
  small: `(${landscapeOnly}) and (${minHeight.mobile})`,
  medium: `(${landscapeOnly}) and (${minHeight.mobileLarge})`,
  large: `(${landscapeOnly}) and (${minHeight.tablet})`,
  xl: `(${landscapeOnly}) and (${minHeight.laptop})`,
};

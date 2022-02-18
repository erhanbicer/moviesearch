const DEFAULT_IMAGE_URL =
  'https://cima-afrique.org/cima/images/not-available.png';

export const validateImageURL = (imageURL: string): string => {
  return imageURL.match(/N\/A/g) ? DEFAULT_IMAGE_URL : imageURL;
};

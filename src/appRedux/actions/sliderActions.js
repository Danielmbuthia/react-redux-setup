export const SLIDE_PROJECT_TYPE_LEFT = 'SLIDE_PROJECT_TYPE_LEFT';

export const SlideProjectTypeLeftGenerator = (data = []) => {
  return {
    type: SLIDE_PROJECT_TYPE_LEFT,
    payload: data
  };
};

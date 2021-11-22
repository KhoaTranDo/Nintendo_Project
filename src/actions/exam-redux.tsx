export const examRedux = (exam: { exam1: string; exam2: string }) => {
  return {
    type: "EXAM",
    payload: exam,
  };
};

interface typeDataExam {
  data: string;
}

const initialState: typeDataExam = {
  data: "",
};
const examReducer = (
  state = initialState,
  action: { exam1: string; exam2: string }
): typeDataExam => {
  if (action) {
  }
  return state;
};

export default examReducer;

interface typeDataExam {
  data: string;
}

const initialState: typeDataExam = {
  data: "",
};
const examReducer = (state = initialState, action: string) => {
  return state;
};

export default examReducer;

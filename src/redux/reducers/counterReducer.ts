const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

type Action = {
  type: string,
  payload: number
}

const counterReducder = (state = 0, action: Action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload;
    case types.DECREMENT:
      return state - action.payload;
  }
  return state;
}

export default counterReducder;
function formatPayload(payload) {
  if (payload.toString().length === 5) {
    return payload.toString().substring(0, 2) + "," + payload.toString().substring(2, 6);
  } else if (payload.toString().length === 4) {
    return payload.toString().substring(0, 1) + "," + payload.toString().substring(1, 5);
  } else {
    return payload.toString();
  }
}

export default formatPayload;

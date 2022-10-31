// TODO use something better for logging
export default function log(msg: any) {
  if (process.env.NODE_ENV !== "test") {
    console.log(msg);
  }
}

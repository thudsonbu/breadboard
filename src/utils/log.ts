// TODO use something better for logging

export default function log(msg: any) {
  console.log(JSON.stringify(msg, null, 2));
}

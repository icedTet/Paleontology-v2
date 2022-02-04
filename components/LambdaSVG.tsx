export const LambdaSVG = (
  props: React.SVGProps<SVGPathElement> & { noAnim?: boolean }
) => (
  <svg
    viewBox="-5 -5 80 95"
    className={`${props.className} stroke-2 stroke-red-400`}
    id={props.id}
    style={props.style}
  >
    <path
      className={`fill-transparent ${!props.noAnim && `animate-lambdaThingMedium`}`}
      id="lambda"
      style={{
        strokeDasharray: props.noAnim ? 0 : 383.6472473144531,
        strokeDashoffset: props.noAnim ? 0 : 383.6472473144531,
        strokeLinecap: "round",
      }}
      d="M8.24,8.49c-0.5-0.67-0.93-1.53-0.88-2.5c0.16-2.84,4.45-5.3,7.75-5.5c6.24-0.38,11.65,7.17,15.38,12.38
  c4.68,6.54,6.96,12.69,12.38,14.5c0.75,0.25,2.3,0.75,3.25,0c1.89-1.49-0.8-6.23,1.38-8.38c0.7-0.69,2.05-1.26,3.12-0.88
  c3.49,1.23-0.52,10.73,4.75,19.5c1.92,3.2,3.19,3.16,4.75,6.75c1.79,4.12,0.89,5.95,3.12,9.75c1.45,2.47,2.1,2.15,3.87,5.25
  c2.14,3.74,2.34,6.19,2.38,6.88c0.08,1.35,0.24,4.37-1.25,5.25c-1.96,1.15-6.53-2.62-7.5-4c-0.03-0.04-0.06-0.09-0.12-0.12
  c-0.96-0.53-3.33,5.07-8,7.88c-4.65,2.79-8.59,1.01-9.75,3.5c-1.07,2.32,1.71,5.2,0.5,6.38c-0.78,0.76-2.62,0.25-3.75-0.38
  c-2.87-1.6-3.03-5.07-4.12-5c-1.23,0.08-0.93,4.39-3.88,6.12c-0.42,0.25-1.58,0.93-2.5,0.5c-2.12-0.98-0.72-6.74-2-7.12
  c-1.28-0.38-2.78,5.33-6.88,6.12c-0.24,0.05-2.27,0.41-3.5-0.75c-1.42-1.34,1.64-4.42,0.38-7.12c-0.12-0.26-0.45-1.08-1.25-1.5
  c-0.4-0.21-0.73-0.23-0.88-0.25c-1.86-0.29-2.28-5.79-3.88-6.12c-1.45-0.31-2.31,3.93-5.75,4.75c-0.23,0.05-2.21,0.49-3.62-0.62
  c-1.78-1.41-1.44-4.34-1.38-4.88C0.9,64.27,5,64.63,7.74,59.12c2.17-4.38,1.3-8.05,4.88-11c0.76-0.62,1.01-0.64,1.38-1.12
  c2.6-3.49-7.8-11.5-5.75-15c0.64-1.09,2.3-1.5,3.38-1.5c2.04,0,3.17,2.04,3.62,1.75c0.89-0.56-3.88-7.36-1.88-9.87
  c0.82-1.03,2.6-1.11,3.75-0.88c4.16,0.87,4.53,6.95,8.25,7.38c0.13,0.02,1.88,0.19,2.88-0.88c2.85-3.05-4.37-12.06-6.88-17
  c-0.04-0.07-0.11-0.22-0.25-0.25c-0.85-0.18-1.37,4.74-4.38,6.62c-2.08,1.31-5.23,1.08-5.75,0c-0.96-2.01,6.36-8.68,7.5-9.38
  c0.01-0.01,0.08-0.05,0.12-0.12c0.52-0.84-1.9-4.55-4.75-4.75C11.53,2.95,8.92,5.12,8.24,8.49z"
    />
  </svg>
);

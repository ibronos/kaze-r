import React, { Suspense } from 'react';
import { JSX } from 'react/jsx-runtime';

export const Loader = () => (
  <div>loading..</div>
);

const Loading = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return function LoadableComponent(props: JSX.IntrinsicAttributes) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default Loading;

import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, options = { fallback: null }) => {
  const { fallback = null } = options;
  const LazyComponent = lazy(importFunc);

  const LoadableComponent = props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LoadableComponent;
};

export default loadable;

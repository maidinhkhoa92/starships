import React, { useCallback, useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Template from './Template';
import { peipleActions } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

// Connect to redux
const useConnect = () => {
  // Get state from reducer and map to props
  const stateToProps = {
    list: useSelector(state => state.PeopleState.list),
  };
  
  // Get dispatch and map to props
  const dispatch = useDispatch();
  const dispatchToProps = useMemo(
    () => ({
      fetch: () => dispatch({ type: peipleActions.FETCH_REQUEST, meta: { thunk: true } }),
    }),
    [dispatch]
  );
  return {
    ...stateToProps,
    ...dispatchToProps
  };
};

export default () => {
  const { list, fetch } = useConnect();
  const [loading, setLoading] = useState(false);
  const [initValue, setInitValue] = useState({
    cargo_capacity: {
      from: '0',
      to: '1000000000000'
    },
    hyperdrive_rating: {
      from: '0',
      to: '4'
    }
  });

  useEffect(() => {
    (
      async () => {
        try {
          setLoading(true)
          await fetch();
        } catch (e) {
          console.log(e)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [ fetch, ])

  const onFilter = useCallback((values, actions) => {
    setInitValue(values);
  }, [])

  const results = useMemo(() => _.filter(list.results, item => 
      (
        Number(item.cargo_capacity) >= Number(initValue.cargo_capacity.from) && 
        Number(item.cargo_capacity) <= Number(initValue.cargo_capacity.to)
      ) && (
        Number(item.hyperdrive_rating) >= Number(initValue.hyperdrive_rating.from) && 
        Number(item.hyperdrive_rating) <= Number(initValue.hyperdrive_rating.to))
      )
  , [list.results, initValue])

  return <Template list={results} next={list.next} previous={list.previous} loading={loading} onSubmit={onFilter} initialValues={initValue}/>
}
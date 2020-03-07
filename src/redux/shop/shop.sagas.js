import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); // instead of promise .then() style we are using generator function
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // effect call invokes method inside generator function
                                                                                  // we want to yield this in case the call takes longer then expected
    yield put(fetchCollectionsSuccess(collectionsMap)); // effect put dispatches an action to the Store
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest( // listens for latest action of a specific type that we pass to it (latest up to date from db)
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
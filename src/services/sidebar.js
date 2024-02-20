import { useDispatch, useSelector } from 'react-redux';
import { actions as SidebarActions } from '../store/actions/app';
import useLocalStorage from '../utils/useLocalStorage';

export default function SidebarServices() {
  const dispatch = useDispatch();
  const { sidebarCollapse: sidebarState } = useSelector(
    (state) => state.app.app
  );
  const { set, get } = useLocalStorage;

  const { sidebarToggle: sidebarToggleActions } = SidebarActions;

  const sidebarLocalState = get('sidebar')?.length
    ? get('sidebar') === 'true'
    : undefined;

  function setSidebarLocalState() {
    if (sidebarLocalState !== undefined) {
      dispatch(sidebarToggleActions(sidebarLocalState));
      set('sidebar', sidebarLocalState);
    }
  }

  function sidebarToggle() {
    dispatch(sidebarToggleActions(!sidebarState));
    set('sidebar', !sidebarState);
  }

  return { sidebarToggle, setSidebarLocalState, sidebarState };
}

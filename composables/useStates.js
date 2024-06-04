export const useLoggedIn = () => {
	return useState('isLoggedIn', () => false )
}
export const usePopupAuth = () => {
	return useState('isPopupAuth', () => false )
}
export const usePopupCity = () => {
	return useState('isPopupCity', () => false )
}
export const useCabMenuIndex = () => {
	return useState('cabMenuIndex', () => 0 )
}
export const useUserMenu = () => {
	return useState('isUserMenu', () => false )
}
export const useUserMenuElem = () => {
	return useState('userMenuElem', () => {} )
}
export const useUserBtn = () => {
	return useState('userBtn', () => {} )
}
export const useUserMenuIndex = () => {
	return useState('userMenuIndex', () => 0 )
}
export const useManagerInfo = () => {
	return useState('managerInfo', () => false )
}
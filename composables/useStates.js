export const useLoggedIn = () => {
	return useState('isLoggedIn', () => false )
}
export const usePopupAuth = () => {
	return useState('isPopupAuth', () => false )
}
export const usePopupComparison = () => {
	return useState('isPopupComparison', () => false )
}
export const usePopupCity = () => {
	return useState('isPopupCity', () => false )
}
export const usePopupAddAuto = () => {
	return useState('isPopupAddAuto', () => false )
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
export const useBasketItem = () => {
	return useState('isBasketItem', () => false )
}
export const useBasketCounter = () => {
	return useState('isBasketCounter', () => false )
}
export const useCatalogDrop = () => {
	return useState('isCatalogDrop', () => false )
}
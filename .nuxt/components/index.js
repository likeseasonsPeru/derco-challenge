export { default as Logo } from '../../components/Logo.vue'
export { default as PaginationSection } from '../../components/Catalogo/PaginationSection.vue'
export { default as AutoItem } from '../../components/General/AutoItem.vue'
export { default as Formulario } from '../../components/Cotizar/Formulario.vue'
export { default as SectionButton } from '../../components/Home/SectionButton.vue'
export { default as SectionModelos } from '../../components/Home/SectionModelos.vue'
export { default as SwiperSlider } from '../../components/Home/SwiperSlider.vue'
export { default as Footer } from '../../components/Layout/Footer/Footer.vue'
export { default as Marcas } from '../../components/Layout/Footer/Marcas.vue'
export { default as Header } from '../../components/Layout/Header/index.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPaginationSection = import('../../components/Catalogo/PaginationSection.vue' /* webpackChunkName: "components/Catalogo/PaginationSection" */).then(c => c.default || c)
export const LazyAutoItem = import('../../components/General/AutoItem.vue' /* webpackChunkName: "components/General/AutoItem" */).then(c => c.default || c)
export const LazyFormulario = import('../../components/Cotizar/Formulario.vue' /* webpackChunkName: "components/Cotizar/Formulario" */).then(c => c.default || c)
export const LazySectionButton = import('../../components/Home/SectionButton.vue' /* webpackChunkName: "components/Home/SectionButton" */).then(c => c.default || c)
export const LazySectionModelos = import('../../components/Home/SectionModelos.vue' /* webpackChunkName: "components/Home/SectionModelos" */).then(c => c.default || c)
export const LazySwiperSlider = import('../../components/Home/SwiperSlider.vue' /* webpackChunkName: "components/Home/SwiperSlider" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Layout/Footer/Footer.vue' /* webpackChunkName: "components/Layout/Footer/Footer" */).then(c => c.default || c)
export const LazyMarcas = import('../../components/Layout/Footer/Marcas.vue' /* webpackChunkName: "components/Layout/Footer/Marcas" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Layout/Header/index.vue' /* webpackChunkName: "components/Layout/Header/index" */).then(c => c.default || c)

import request, { METHODS } from '@/api'

/**
 * @function getUserData 查询用户
 */
export const getUserData = (method) => request({
    method,
    url: "/cors-domain/getUserData",
})

/**
 * @function beforeUpdateFile 文件上传前
 */
export const beforeUpdateFile = (data) => request({
    url: "/file/beforeUpload",
    method: METHODS.POST,
    data
})

/**
 * @function mediumUpdateFile 文件上传
 */
export const mediumUpdateFile = (data) => request({
    url: "/file/dataUpload",
    method: METHODS.POST,
    data
})

/**
 * @function getFileList 获取文件列表
 */
export const getFileList = () => request({
    url: "/file/getFileList",
})

/**
 * @function getJson 普通 Json 数据
 */
export const getJson = () => request({
    method: METHODS.POST,
    url: "/file/getJson",
    data: {
        message: "Hello Server!"
    }
})

export const getEmployeeList = () => request({
    url: "/cors-domain/getEmployeeList",
})

export const getMovieList = () => request({
    url: "/cors-domain/getMovieList",
})

export const getBookList = () => request({
    url: "/cors-domain/getBookList",
})

export const getPhoneList = () => request({
    url: "/cors-domain/getPhoneList",
})

export const getFavoritesList = () => request({
    url: "/cors-domain/getFavoritesList",
})

export const getWorkList = () => request({
    url: "/cors-domain/getWorkList",
})

export const getGameList = () => request({
    url: "/cors-domain/getGameList",
})

export const getMusicList = () => request({
    url: "/cors-domain/getMusicList",
})

export const getFinancialList = () => request({
    url: "/cors-domain/getFinancialList",
})

export const getRecipeList = () => request({
    url: "/cors-domain/getRecipeList",
})


export const getEmployeeListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getEmployeeList`,
})

export const getMovieListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getMovieList`,
})

export const getBookListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getBookList`,
})

export const getPhoneListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getPhoneList`,
})

export const getFavoritesListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getFavoritesList`,
})

export const getWorkListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getWorkList`,
})

export const getGameListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getGameList`,
})

export const getMusicListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getMusicList`,
})

export const getFinancialListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getFinancialList`,
})

export const getRecipeListH2 = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/getRecipeList`,
})

export const servicePush = () => request({
    url: `${import.meta.env.VITE_HTTP2_BASE_API}http2/test/servicePush`,
})
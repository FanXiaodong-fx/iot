import Mock from 'mockjs';

const baseApi = '/api/govShow';

const mockList = [
    {
        //获取登录用户信息和行政区划选项,刷新时间
        url: `${baseApi}?optionType=location`,
        method: 'get',
        data: {
            rows: [
                {
                    Name: '杭州市',
                    Id: "A",
                },
                {
                    Name: '宁波市',
                    Id: "B",
                },
                {
                    Name: "鄞州区",
                    Id: "B1",
                    ParentId: "B"
                },
                {
                    Name: "江北区",
                    Id: "B2",
                    ParentId: "B"
                },
                {
                    Name: "北仑区",
                    Id: "B3",
                    ParentId: "B"
                },
                {
                    Name: "中和街道",
                    Id: "B1_1",
                    ParentId: "B1"
                },
                {
                    Name: "钟公庙街道",
                    Id: "B1_2",
                    ParentId: "B1"
                },
                {
                    Name: "南裕街道",
                    Id: "B1_3",
                    ParentId: "B1"
                }
            ],
            name: ""
        }
    },
    {
        //获取整体状体
        url: `${baseApi}?optionType=status`,
        method: 'get',
        data: {
            businessCount: 54,
            equipmentCount: 5442,
            placeCount: 59
        }
    },
    {
        //获取街道/镇列表
        url: `${baseApi}?optionType=town`,
        method: 'get',
        data: {
        }
    },
    {
        //地图--街道/镇-->地图点点击-->街道/镇详情
        url: `${baseApi}?optionType=town`,
        method: 'get',
        data: {
        }
    },
    {
        //地图--街道/镇-->地图点点击-->异常列表
        url: `${baseApi}?optionType=townwarninglist`,
        method: 'get',
        data: {
        }
    },
    {
        //获取场所列表
        url: `${baseApi}?optionType=placelist`,
        method: 'get',
        data: {
        }
    },
    {
        //地图--场所-->地图点点击-->场所详情
        url: `${baseApi}?optionType=place`,
        method: 'get',
        data: {
        }
    },
    {
        //地图--场所-->地图点点击-->案件列表
        url: `${baseApi}?optionType=placewarninglist`,
        method: 'get',
        data: {
        }
    },
    {
        //获取天气
        url: `${baseApi}?optionType=weather`,
        method: 'get',
        data: {
        }
    },


    {
        //单位-单位运行情况(原report1)
        url: `${baseApi}?optionType=customerOperation`,
        method: 'get',
        data: {
        }
    },
    {
        //单位-单位年度运行情况(原report1)
        url: `${baseApi}?optionType=customerOperationYear`,
        method: 'get',
        data: {
        }
    },
    {
        //单位-单位年度运行情况--饼图点击-->单位预警情况(原businesslist)
        url: `${baseApi}?optionType=businesslist`,
        method: 'get',
        data: {
        }
    },
    {
        //单位-单位年度运行情况--文本点击-->案件列表(原recordlist)
        url: `${baseApi}?optionType=recordlist`,
        method: 'get',
        data: {
        }
    },



    {
        //行业-各行业单位数占比(原report2)
        url: `${baseApi}?optionType=industryCustomerRate`,
        method: 'get',
        data: {
        }
    },
    {
        //行业-行业运行趋势图(原report2)
        url: `${baseApi}?optionType=industryCustomerOperation`,
        method: 'get',
        data: {
        }
    },
    {
        //行业-各行业单位数占比--饼图点击-->行业详情--头部信息
        url: `${baseApi}?optionType=industryInfo`,
        method: 'get',
        data: {
        }
    },
    {
        //行业-各行业单位数占比--饼图点击-->行业详情--企业信息(分页)
        url: `${baseApi}?optionType=industryCustomerList`,
        method: 'get',
        data: {
        }
    },


    {
        //设备-各类设备数量占比(原report3)
        url: `${baseApi}?optionType=equipmentCategoryRate`,
        method: 'get',
        data: {
        }
    },
    {
        //设备-各类设备在线率(原report3)
        url: `${baseApi}?optionType=equipmentCategoryOnlineRate`,
        method: 'get',
        data: {
        }
    },
    {
        //设备-各类设备运行趋势图(原report3)
        url: `${baseApi}?optionType=equipmentCategoryOperation`,
        method: 'get',
        data: {
        }
    },
    {
        //设备-各类设备数量占比--饼图点击-->设备列表
        url: `${baseApi}?optionType=equipmentlist`,
        method: 'get',
        data: {
        }
    },


    {
        //场所搜索
        url: `${baseApi}?optionType=placelist`,
        method: 'get',
        data: {
        }
    }

]

mockList.forEach(i => {
    const { url, method, data } = i;

    Mock.mock(url, method, {
        isSuccess: true,
        bl: true,
        data
    })
})
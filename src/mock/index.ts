import Mock, { Random } from 'mockjs';

export interface response {
    code:number;
    rows:rowData[];
    messgae:string;
}

export interface rowData{
    id:string;
    name:string;
    desc:string;
    sort:number;
}

Mock.mock('/getHomeData','get',()=>
{
    const data:response ={
        code:200,
        rows:[],
        messgae:'成功'
    }
    for(let i=0;i<5;i++){
        data.rows.push({
            id:i.toString(),
            name:'张三',
            desc:'运动员',
            sort:i
        } as rowData);
    }
    return data;
});
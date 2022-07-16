import { OrderItem } from 'sequelize/types';
import { Query } from '../types/pagination';

export const getPagination = (id: number|string, pagination: Query) => {
    let {size, page, sort, order} = pagination;
    if(!sort) sort = id;
    if(!order) order = 'ASC';

    return {
        //include: {all: true},
        limit: size? size:undefined,
        offset: (size && page)? size*(page-1):undefined,
        order: [[sort, order] as OrderItem]
    }
};
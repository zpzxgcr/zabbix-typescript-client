import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { ITemplateResponse } from './ITemplateResponse';
import { ITemplateCreateParams } from './ITemplateCreateParams';
import { ITemplateGetParams } from './ITemplateGetParams';
import { ITemplateMassaddParams } from './ITemplateMassaddParams';
import { ITemplateMassremoveParams } from './ITemplateMassremoveParams';
import { ITemplateMassupdateParams } from './ITemplateMassupdateParams';
import { ITemplateUpdateParams } from './ITemplateUpdateParams';
import { ITemplate } from './ITemplate';

export class Template extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'template.';
    }

    public async get(params?: ITemplateGetParams): Promise<ITemplate[]> {
        return await this.call('get', params);
    }

    public async create(params: ITemplateCreateParams): Promise<ITemplateResponse> {
        return await this.call('create', params);
    }

    public async update(params: ITemplateUpdateParams): Promise<ITemplateResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<ITemplateResponse> {
        return await this.call('delete', params);
    }

    public async isreadable(params: string[] | number[]): Promise<ITemplateResponse> {
        return await this.call('isreadable', params);
    }

    public async iswritable(params: string[] | number[]): Promise<ITemplateResponse> {
        return await this.call('iswritable', params);
    }

    public async massadd(params: ITemplateMassaddParams): Promise<ITemplateResponse> {
        return await this.call('massadd', params);
    }

    public async massupdate(params: ITemplateMassupdateParams): Promise<ITemplateResponse> {
        return await this.call('massupdate', params);
    }

    public async massremove(params: ITemplateMassremoveParams): Promise<ITemplateResponse> {
        return await this.call('massremove', params);
    }
}
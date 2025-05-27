import { BASE_URL } from '../../../../../shared/utils/base_url';

export class DataSourceEndpoints {

    static readonly getPeriodos = `${BASE_URL}/`
    static readonly getAsistencias = `${BASE_URL}/asistencia/asistencia/periodo`
    static readonly updatePeriodo = `${BASE_URL}/`
    static readonly postAsistencia = `${BASE_URL}/`

}

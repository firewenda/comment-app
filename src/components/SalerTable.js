import React, { Component } from 'react';

class SalerTable extends Component {

    render() {
        return (
            <div>
                <div className="table-head">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="table-column">签单产品</td>
                                <td className="table-column">本月已签约客户数量</td>
                                <td className="table-column">本月已激活客户数量</td>
                                <td className="table-column">我的分值</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-cnt">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td className="table-column">金柚宝（尊享）</td>
                                <td className="table-column">10</td>
                                <td colSpan="2" rowSpan="5"></td>
                            </tr>
                            <tr>
                                <td className="table-column">金柚宝（尊享）</td>
                                <td className="table-column">10</td>
                            </tr>
                            <tr>
                                <td className="table-column">金柚宝（尊享）</td>
                                <td className="table-column">10</td>
                            </tr>
                            <tr>
                                <td className="table-column">金柚宝（尊享）</td>
                                <td className="table-column">10</td>
                            </tr>
                            <tr>
                                <td className="table-column">金柚宝（尊享）</td>
                                <td className="table-column">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-foot">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="table-column">合计</td>
                                <td className="table-column">123</td>
                                <td colSpan="2" rowSpan="1"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SalerTable;
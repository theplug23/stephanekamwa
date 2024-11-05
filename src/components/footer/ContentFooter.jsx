import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p >
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+49) 1639209766
            </p>
            {/* <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+33) 754543997
            </p>
            <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+237) 686117771
            </p>
            <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+221) 777421948
            </p> */}
            <p className="mt-2">
                <a href="mailto:hello@stephanekamwa.de"><i class="fa fa-envelope-o" aria-hidden="true" style= {{color: '#b99226'}}> :</i> hello@stephanekamwa.de</a> 
            </p>
            
        </div>
    );
}

export default ContentFooter;
import React from 'react';
import missingWrapper from '../../missing-wrapper';
import LoopConstructorWrapper from '../wrapper';
import * as U from '../../../utils/lib';

const RosterForLoop = (props) => <LoopConstructorWrapper {...props} />;

export default missingWrapper(React.memo(RosterForLoop), U.areEqual);

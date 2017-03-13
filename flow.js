"use strict"

const FlowIoT = require("./index");

exports.decode = (event, state, args, next) => {
    next(
        null,
        null,
        event.output.pipe(FlowIoT.decode(args && args.objectMode))
    );
};

exports.encode = (event, state, args, next) => {
    next(
        null,
        null,
        event.output.pipe(FlowIoT.encode(args && args.objectMode))
    );
};

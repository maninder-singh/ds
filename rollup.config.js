import path from 'path';
import minify from 'rollup-plugin-babel-minify';
import cleaner from 'rollup-plugin-cleaner';
import serve from 'rollup-plugin-serve';

let constant = {
    dist:"dist",
    src:"src",
    public:"public",
    nodeModules:"node_modules",
    outputMinJSFileName:"ds.min.js",
    outputFileName:"ds.js",
    inputFileName:path.join(__dirname,"src","index.js"),
    isDev:process.env.ENV === "dev",
    port: 5000
};

const _plugins = () => {
    let plugins = [];
    plugins.push(cleaner({
        targets:[path.join(__dirname,constant.dist)]
    }));
    if(constant.isDev){
        plugins.push(serve({
            contentBase: [constant.dist,constant.public],
            port:constant.port
        }));
    }else{
        plugins.push(minify({
            comments:false,
            sourceMap:false
        }));
    }
    return plugins;
};

const _output = () => {
    let output = {
        format:'iife',
        name:'DS',
        file:path.join(__dirname,constant.dist,constant.outputMinJSFileName)
    };

    if(constant.isDev){
        output.file = path.join(__dirname,constant.dist,constant.outputFileName);
    }
    return output;
};

const _watch = () => {
    let output = {watch:false};
    if(constant.isDev){
        output.chokidar = true;
        output.exclude = `${constant.nodeModules}/**`;
        output.include = `${constant.src}/**`;
    }
    return output;
};

let _config = {};
_config.input = constant.inputFileName;
_config.output = _output();
_config.plugins = _plugins();
_config.watch = _watch();

export default _config;
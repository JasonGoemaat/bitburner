/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  const outputDirectory = "dist";
  const entry = "./src/lib.ts";

  const statsConfig = {
    builtAt: true,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    entrypoints: false,
  };

  // Get the current commit hash to inject into the app
  // https://stackoverflow.com/a/38401256
  const commitHash = require("child_process").execSync("git rev-parse --short HEAD").toString().trim();

  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": isDevelopment ? '"development"' : '"production"',
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new NpmDtsPlugin({
        logLevel: 'debug'
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
      new webpack.DefinePlugin({
        __COMMIT_HASH__: JSON.stringify(commitHash || "DEV"),
      }),
        new webpack.SourceMapDevToolPlugin({
          filename: "[file].map",
          columns: true,
          module: true,
        }),
    ].filter(Boolean),
    target: "web",
    // node: {
    //   fs: "mock",
    // },
    entry: {
      'bb-lib': entry,
    },
    output: {
      // https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/
      path: path.resolve(__dirname, outputDirectory),
      filename: "[name].js",
      libraryTarget: 'umd',
      library: 'BBLib',
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.(js$|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|jp2|webp)$/,
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            outputPath: "images",
            publicPath: `${outputDirectory}/images`,
          },
        },
      ],
    },
    optimization: {
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      flagIncludedChunks: true,
      occurrenceOrder: true,
      sideEffects: true,
      providedExports: true,
      usedExports: true,
      concatenateModules: false,
      namedModules: false,
      namedChunks: false,
      minimize: !isDevelopment,
      portableRecords: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: `vendor`,
            chunks: "all",
          },
        },
      },
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx"],
    },
    stats: statsConfig,
  };
};

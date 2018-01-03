#!/usr/bin/env node

/* eslint-disable no-console */

let { createParser } = require( 'dashdash' )

let parser = createParser( {
	options: [ {
		names: [ 'help', 'h', '?' ],
		type: 'bool',
		hidden: true
	}, {
		names: [ 'version', 'v' ],
		type: 'bool',
		help: 'Display version'
	}, {
		names: [ 'expr', 'e' ],
		type: 'string',
		help: 'Compile ARG to Javascript'
	} ]
} )

let { help, version, expr } = parser.parse( process.argv )

if ( help || version ) {
	let
		{ keys } = Object,
		pkg = require( '../package.json' )

	if ( help ) {
		console.log( `Usage: ${keys( pkg.bin )[ 0 ]} [options]` )
		console.log()
		console.log( 'Options:' )
		console.log( parser.help() )
		console.log( 'Run on TTY to start REPL or compile arguments.' )
		console.log( 'Otherwise provided input will be compiled to Javascript.' )
	}
	else
		console.log( pkg.version )

	return
}

let
	{ stdin } = process,
	compiler = require( '../lib' )

let source = stdin.isTTY ? expr : stdin

if ( source )
	require( './compile' )( compiler, source )
else
	require( './repl' )( compiler )

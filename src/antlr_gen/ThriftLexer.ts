// Generated from Thrift.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ThriftLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly INTEGER = 37;
	public static readonly HEX_INTEGER = 38;
	public static readonly DOUBLE = 39;
	public static readonly TYPE_BOOL = 40;
	public static readonly TYPE_BYTE = 41;
	public static readonly TYPE_I16 = 42;
	public static readonly TYPE_I32 = 43;
	public static readonly TYPE_I64 = 44;
	public static readonly TYPE_DOUBLE = 45;
	public static readonly TYPE_STRING = 46;
	public static readonly TYPE_BINARY = 47;
	public static readonly LITERAL_VALUE = 48;
	public static readonly IDENTIFIER = 49;
	public static readonly COMMA = 50;
	public static readonly WS = 51;
	public static readonly SL_COMMENT = 52;
	public static readonly ML_COMMENT = 53;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "INTEGER", "HEX_INTEGER", "DOUBLE", "TYPE_BOOL", 
		"TYPE_BYTE", "TYPE_I16", "TYPE_I32", "TYPE_I64", "TYPE_DOUBLE", "TYPE_STRING", 
		"TYPE_BINARY", "LITERAL_VALUE", "IDENTIFIER", "COMMA", "LETTER", "DIGIT", 
		"HEX_DIGIT", "WS", "SL_COMMENT", "ML_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'include'", "'namespace'", "'*'", "'cpp_namespace'", "'php_namespace'", 
		"'cpp_include'", "'const'", "'='", "'typedef'", "'enum'", "'{'", "'}'", 
		"'senum'", "'struct'", "'union'", "'exception'", "'service'", "'extends'", 
		"':'", "'required'", "'optional'", "'('", "')'", "'oneway'", "'async'", 
		"'void'", "'throws'", "'map'", "'<'", "'>'", "'set'", "'list'", "'cpp_type'", 
		"'['", "']'", "';'", undefined, undefined, undefined, "'bool'", "'byte'", 
		"'i16'", "'i32'", "'i64'", "'double'", "'string'", "'binary'", undefined, 
		undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "INTEGER", "HEX_INTEGER", "DOUBLE", "TYPE_BOOL", 
		"TYPE_BYTE", "TYPE_I16", "TYPE_I32", "TYPE_I64", "TYPE_DOUBLE", "TYPE_STRING", 
		"TYPE_BINARY", "LITERAL_VALUE", "IDENTIFIER", "COMMA", "WS", "SL_COMMENT", 
		"ML_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ThriftLexer._LITERAL_NAMES, ThriftLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ThriftLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ThriftLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Thrift.g4"; }

	// @Override
	public get ruleNames(): string[] { return ThriftLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ThriftLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ThriftLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ThriftLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x027\u01F6\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x05&\u0148\n&\x03&\x06&\u014B" +
		"\n&\r&\x0E&\u014C\x03\'\x05\'\u0150\n\'\x03\'\x03\'\x03\'\x03\'\x06\'" +
		"\u0156\n\'\r\'\x0E\'\u0157\x03(\x05(\u015B\n(\x03(\x06(\u015E\n(\r(\x0E" +
		"(\u015F\x03(\x03(\x06(\u0164\n(\r(\x0E(\u0165\x05(\u0168\n(\x03(\x03(" +
		"\x06(\u016C\n(\r(\x0E(\u016D\x05(\u0170\n(\x03(\x03(\x05(\u0174\n(\x03" +
		")\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x03" +
		"0\x031\x031\x031\x031\x071\u01A5\n1\f1\x0E1\u01A8\v1\x031\x031\x031\x03" +
		"1\x031\x071\u01AF\n1\f1\x0E1\u01B2\v1\x031\x051\u01B5\n1\x032\x032\x05" +
		"2\u01B9\n2\x032\x032\x032\x072\u01BE\n2\f2\x0E2\u01C1\v2\x033\x033\x03" +
		"4\x034\x035\x035\x036\x036\x056\u01CB\n6\x037\x037\x037\x037\x067\u01D1" +
		"\n7\r7\x0E7\u01D2\x037\x037\x038\x038\x038\x058\u01DA\n8\x038\x078\u01DD" +
		"\n8\f8\x0E8\u01E0\v8\x038\x058\u01E3\n8\x038\x038\x038\x038\x039\x039" +
		"\x039\x039\x079\u01ED\n9\f9\x0E9\u01F0\v9\x039\x039\x039\x039\x039\x03" +
		"\u01EE\x02\x02:\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E" +
		"\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02" +
		"\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02" +
		"\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02" +
		"\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c" +
		"\x023e\x024g\x02\x02i\x02\x02k\x02\x02m\x025o\x026q\x027\x03\x02\f\x04" +
		"\x02--//\x04\x02GGgg\b\x02$$))^^ppttvv\x04\x02$$^^\x04\x02))^^\x04\x02" +
		"00aa\x04\x02C\\c|\x04\x02CHch\x04\x02\v\v\"\"\x03\x02\f\f\x02\u020E\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
		"C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02" +
		"\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02" +
		"\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03" +
		"\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02" +
		"\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02" +
		"e\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02" +
		"\x02\x02\x03s\x03\x02\x02\x02\x05{\x03\x02\x02\x02\x07\x85\x03\x02\x02" +
		"\x02\t\x87\x03\x02\x02\x02\v\x95\x03\x02\x02\x02\r\xA3\x03\x02\x02\x02" +
		"\x0F\xAF\x03\x02\x02\x02\x11\xB5\x03\x02\x02\x02\x13\xB7\x03\x02\x02\x02" +
		"\x15\xBF\x03\x02\x02\x02\x17\xC4\x03\x02\x02\x02\x19\xC6\x03\x02\x02\x02" +
		"\x1B\xC8\x03\x02\x02\x02\x1D\xCE\x03\x02\x02\x02\x1F\xD5\x03\x02\x02\x02" +
		"!\xDB\x03\x02\x02\x02#\xE5\x03\x02\x02\x02%\xED\x03\x02\x02\x02\'\xF5" +
		"\x03\x02\x02\x02)\xF7\x03\x02\x02\x02+\u0100\x03\x02\x02\x02-\u0109\x03" +
		"\x02\x02\x02/\u010B\x03\x02\x02\x021\u010D\x03\x02\x02\x023\u0114\x03" +
		"\x02\x02\x025\u011A\x03\x02\x02\x027\u011F\x03\x02\x02\x029\u0126\x03" +
		"\x02\x02\x02;\u012A\x03\x02\x02\x02=\u012C\x03\x02\x02\x02?\u012E\x03" +
		"\x02\x02\x02A\u0132\x03\x02\x02\x02C\u0137\x03\x02\x02\x02E\u0140\x03" +
		"\x02\x02\x02G\u0142\x03\x02\x02\x02I\u0144\x03\x02\x02\x02K\u0147\x03" +
		"\x02\x02\x02M\u014F\x03\x02\x02\x02O\u015A\x03\x02\x02\x02Q\u0175\x03" +
		"\x02\x02\x02S\u017A\x03\x02\x02\x02U\u017F\x03\x02\x02\x02W\u0183\x03" +
		"\x02\x02\x02Y\u0187\x03\x02\x02\x02[\u018B\x03\x02\x02\x02]\u0192\x03" +
		"\x02\x02\x02_\u0199\x03\x02\x02\x02a\u01B4\x03\x02\x02\x02c\u01B8\x03" +
		"\x02\x02\x02e\u01C2\x03\x02\x02\x02g\u01C4\x03\x02\x02\x02i\u01C6\x03" +
		"\x02\x02\x02k\u01CA\x03\x02\x02\x02m\u01D0\x03\x02\x02\x02o\u01D9\x03" +
		"\x02\x02\x02q\u01E8\x03\x02\x02\x02st\x07k\x02\x02tu\x07p\x02\x02uv\x07" +
		"e\x02\x02vw\x07n\x02\x02wx\x07w\x02\x02xy\x07f\x02\x02yz\x07g\x02\x02" +
		"z\x04\x03\x02\x02\x02{|\x07p\x02\x02|}\x07c\x02\x02}~\x07o\x02\x02~\x7F" +
		"\x07g\x02\x02\x7F\x80\x07u\x02\x02\x80\x81\x07r\x02\x02\x81\x82\x07c\x02" +
		"\x02\x82\x83\x07e\x02\x02\x83\x84\x07g\x02\x02\x84\x06\x03\x02\x02\x02" +
		"\x85\x86\x07,\x02\x02\x86\b\x03\x02\x02\x02\x87\x88\x07e\x02\x02\x88\x89" +
		"\x07r\x02\x02\x89\x8A\x07r\x02\x02\x8A\x8B\x07a\x02\x02\x8B\x8C\x07p\x02" +
		"\x02\x8C\x8D\x07c\x02\x02\x8D\x8E\x07o\x02\x02\x8E\x8F\x07g\x02\x02\x8F" +
		"\x90\x07u\x02\x02\x90\x91\x07r\x02\x02\x91\x92\x07c\x02\x02\x92\x93\x07" +
		"e\x02\x02\x93\x94\x07g\x02\x02\x94\n\x03\x02\x02\x02\x95\x96\x07r\x02" +
		"\x02\x96\x97\x07j\x02\x02\x97\x98\x07r\x02\x02\x98\x99\x07a\x02\x02\x99" +
		"\x9A\x07p\x02\x02\x9A\x9B\x07c\x02\x02\x9B\x9C\x07o\x02\x02\x9C\x9D\x07" +
		"g\x02\x02\x9D\x9E\x07u\x02\x02\x9E\x9F\x07r\x02\x02\x9F\xA0\x07c\x02\x02" +
		"\xA0\xA1\x07e\x02\x02\xA1\xA2\x07g\x02\x02\xA2\f\x03\x02\x02\x02\xA3\xA4" +
		"\x07e\x02\x02\xA4\xA5\x07r\x02\x02\xA5\xA6\x07r\x02\x02\xA6\xA7\x07a\x02" +
		"\x02\xA7\xA8\x07k\x02\x02\xA8\xA9\x07p\x02\x02\xA9\xAA\x07e\x02\x02\xAA" +
		"\xAB\x07n\x02\x02\xAB\xAC\x07w\x02\x02\xAC\xAD\x07f\x02\x02\xAD\xAE\x07" +
		"g\x02\x02\xAE\x0E\x03\x02\x02\x02\xAF\xB0\x07e\x02\x02\xB0\xB1\x07q\x02" +
		"\x02\xB1\xB2\x07p\x02\x02\xB2\xB3\x07u\x02\x02\xB3\xB4\x07v\x02\x02\xB4" +
		"\x10\x03\x02\x02\x02\xB5\xB6\x07?\x02\x02\xB6\x12\x03\x02\x02\x02\xB7" +
		"\xB8\x07v\x02\x02\xB8\xB9\x07{\x02\x02\xB9\xBA\x07r\x02\x02\xBA\xBB\x07" +
		"g\x02\x02\xBB\xBC\x07f\x02\x02\xBC\xBD\x07g\x02\x02\xBD\xBE\x07h\x02\x02" +
		"\xBE\x14\x03\x02\x02\x02\xBF\xC0\x07g\x02\x02\xC0\xC1\x07p\x02\x02\xC1" +
		"\xC2\x07w\x02\x02\xC2\xC3\x07o\x02\x02\xC3\x16\x03\x02\x02\x02\xC4\xC5" +
		"\x07}\x02\x02\xC5\x18\x03\x02\x02\x02\xC6\xC7\x07\x7F\x02\x02\xC7\x1A" +
		"\x03\x02\x02\x02\xC8\xC9\x07u\x02\x02\xC9\xCA\x07g\x02\x02\xCA\xCB\x07" +
		"p\x02\x02\xCB\xCC\x07w\x02\x02\xCC\xCD\x07o\x02\x02\xCD\x1C\x03\x02\x02" +
		"\x02\xCE\xCF\x07u\x02\x02\xCF\xD0\x07v\x02\x02\xD0\xD1\x07t\x02\x02\xD1" +
		"\xD2\x07w\x02\x02\xD2\xD3\x07e\x02\x02\xD3\xD4\x07v\x02\x02\xD4\x1E\x03" +
		"\x02\x02\x02\xD5\xD6\x07w\x02\x02\xD6\xD7\x07p\x02\x02\xD7\xD8\x07k\x02" +
		"\x02\xD8\xD9\x07q\x02\x02\xD9\xDA\x07p\x02\x02\xDA \x03\x02\x02\x02\xDB" +
		"\xDC\x07g\x02\x02\xDC\xDD\x07z\x02\x02\xDD\xDE\x07e\x02\x02\xDE\xDF\x07" +
		"g\x02\x02\xDF\xE0\x07r\x02\x02\xE0\xE1\x07v\x02\x02\xE1\xE2\x07k\x02\x02" +
		"\xE2\xE3\x07q\x02\x02\xE3\xE4\x07p\x02\x02\xE4\"\x03\x02\x02\x02\xE5\xE6" +
		"\x07u\x02\x02\xE6\xE7\x07g\x02\x02\xE7\xE8\x07t\x02\x02\xE8\xE9\x07x\x02" +
		"\x02\xE9\xEA\x07k\x02\x02\xEA\xEB\x07e\x02\x02\xEB\xEC\x07g\x02\x02\xEC" +
		"$\x03\x02\x02\x02\xED\xEE\x07g\x02\x02\xEE\xEF\x07z\x02\x02\xEF\xF0\x07" +
		"v\x02\x02\xF0\xF1\x07g\x02\x02\xF1\xF2\x07p\x02\x02\xF2\xF3\x07f\x02\x02" +
		"\xF3\xF4\x07u\x02\x02\xF4&\x03\x02\x02\x02\xF5\xF6\x07<\x02\x02\xF6(\x03" +
		"\x02\x02\x02\xF7\xF8\x07t\x02\x02\xF8\xF9\x07g\x02\x02\xF9\xFA\x07s\x02" +
		"\x02\xFA\xFB\x07w\x02\x02\xFB\xFC\x07k\x02\x02\xFC\xFD\x07t\x02\x02\xFD" +
		"\xFE\x07g\x02\x02\xFE\xFF\x07f\x02\x02\xFF*\x03\x02\x02\x02\u0100\u0101" +
		"\x07q\x02\x02\u0101\u0102\x07r\x02\x02\u0102\u0103\x07v\x02\x02\u0103" +
		"\u0104\x07k\x02\x02\u0104\u0105\x07q\x02\x02\u0105\u0106\x07p\x02\x02" +
		"\u0106\u0107\x07c\x02\x02\u0107\u0108\x07n\x02\x02\u0108,\x03\x02\x02" +
		"\x02\u0109\u010A\x07*\x02\x02\u010A.\x03\x02\x02\x02\u010B\u010C\x07+" +
		"\x02\x02\u010C0\x03\x02\x02\x02\u010D\u010E\x07q\x02\x02\u010E\u010F\x07" +
		"p\x02\x02\u010F\u0110\x07g\x02\x02\u0110\u0111\x07y\x02\x02\u0111\u0112" +
		"\x07c\x02\x02\u0112\u0113\x07{\x02\x02\u01132\x03\x02\x02\x02\u0114\u0115" +
		"\x07c\x02\x02\u0115\u0116\x07u\x02\x02\u0116\u0117\x07{\x02\x02\u0117" +
		"\u0118\x07p\x02\x02\u0118\u0119\x07e\x02\x02\u01194\x03\x02\x02\x02\u011A" +
		"\u011B\x07x\x02\x02\u011B\u011C\x07q\x02\x02\u011C\u011D\x07k\x02\x02" +
		"\u011D\u011E\x07f\x02\x02\u011E6\x03\x02\x02\x02\u011F\u0120\x07v\x02" +
		"\x02\u0120\u0121\x07j\x02\x02\u0121\u0122\x07t\x02\x02\u0122\u0123\x07" +
		"q\x02\x02\u0123\u0124\x07y\x02\x02\u0124\u0125\x07u\x02\x02\u01258\x03" +
		"\x02\x02\x02\u0126\u0127\x07o\x02\x02\u0127\u0128\x07c\x02\x02\u0128\u0129" +
		"\x07r\x02\x02\u0129:\x03\x02\x02\x02\u012A\u012B\x07>\x02\x02\u012B<\x03" +
		"\x02\x02\x02\u012C\u012D\x07@\x02\x02\u012D>\x03\x02\x02\x02\u012E\u012F" +
		"\x07u\x02\x02\u012F\u0130\x07g\x02\x02\u0130\u0131\x07v\x02\x02\u0131" +
		"@\x03\x02\x02\x02\u0132\u0133\x07n\x02\x02\u0133\u0134\x07k\x02\x02\u0134" +
		"\u0135\x07u\x02\x02\u0135\u0136\x07v\x02\x02\u0136B\x03\x02\x02\x02\u0137" +
		"\u0138\x07e\x02\x02\u0138\u0139\x07r\x02\x02\u0139\u013A\x07r\x02\x02" +
		"\u013A\u013B\x07a\x02\x02\u013B\u013C\x07v\x02\x02\u013C\u013D\x07{\x02" +
		"\x02\u013D\u013E\x07r\x02\x02\u013E\u013F\x07g\x02\x02\u013FD\x03\x02" +
		"\x02\x02\u0140\u0141\x07]\x02\x02\u0141F\x03\x02\x02\x02\u0142\u0143\x07" +
		"_\x02\x02\u0143H\x03\x02\x02\x02\u0144\u0145\x07=\x02\x02\u0145J\x03\x02" +
		"\x02\x02\u0146\u0148\t\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148" +
		"\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149\u014B\x05i5\x02\u014A" +
		"\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014DL\x03\x02\x02\x02\u014E\u0150" +
		"\x07/\x02\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02" +
		"\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x072\x02\x02\u0152\u0153\x07" +
		"z\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u0156\x05k6\x02\u0155\u0154" +
		"\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02" +
		"\u0157\u0158\x03\x02\x02\x02\u0158N\x03\x02\x02\x02\u0159\u015B\t\x02" +
		"\x02\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
		"\u016F\x03\x02\x02\x02\u015C\u015E\x05i5\x02\u015D\u015C\x03\x02\x02\x02" +
		"\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03" +
		"\x02\x02\x02\u0160\u0167\x03\x02\x02\x02\u0161\u0163\x070\x02\x02\u0162" +
		"\u0164\x05i5\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02" +
		"\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03" +
		"\x02\x02\x02\u0167\u0161\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u0170\x03\x02\x02\x02\u0169\u016B\x070\x02\x02\u016A\u016C\x05i5\x02" +
		"\u016B\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016B\x03" +
		"\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F" +
		"\u015D\x03\x02\x02\x02\u016F\u0169\x03\x02\x02\x02\u0170\u0173\x03\x02" +
		"\x02\x02\u0171\u0172\t\x03\x02\x02\u0172\u0174\x05K&\x02\u0173\u0171\x03" +
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174P\x03\x02\x02\x02\u0175" +
		"\u0176\x07d\x02\x02\u0176\u0177\x07q\x02\x02\u0177\u0178\x07q\x02\x02" +
		"\u0178\u0179\x07n\x02\x02\u0179R\x03\x02\x02\x02\u017A\u017B\x07d\x02" +
		"\x02\u017B\u017C\x07{\x02\x02\u017C\u017D\x07v\x02\x02\u017D\u017E\x07" +
		"g\x02\x02\u017ET\x03\x02\x02\x02\u017F\u0180\x07k\x02\x02\u0180\u0181" +
		"\x073\x02\x02\u0181\u0182\x078\x02\x02\u0182V\x03\x02\x02\x02\u0183\u0184" +
		"\x07k\x02\x02\u0184\u0185\x075\x02\x02\u0185\u0186\x074\x02\x02\u0186" +
		"X\x03\x02\x02\x02\u0187\u0188\x07k\x02\x02\u0188\u0189\x078\x02\x02\u0189" +
		"\u018A\x076\x02\x02\u018AZ\x03\x02\x02\x02\u018B\u018C\x07f\x02\x02\u018C" +
		"\u018D\x07q\x02\x02\u018D\u018E\x07w\x02\x02\u018E\u018F\x07d\x02\x02" +
		"\u018F\u0190\x07n\x02\x02\u0190\u0191\x07g\x02\x02\u0191\\\x03\x02\x02" +
		"\x02\u0192\u0193\x07u\x02\x02\u0193\u0194\x07v\x02\x02\u0194\u0195\x07" +
		"t\x02\x02\u0195\u0196\x07k\x02\x02\u0196\u0197\x07p\x02\x02\u0197\u0198" +
		"\x07i\x02\x02\u0198^\x03\x02\x02\x02\u0199\u019A\x07d\x02\x02\u019A\u019B" +
		"\x07k\x02\x02\u019B\u019C\x07p\x02\x02\u019C\u019D\x07c\x02\x02\u019D" +
		"\u019E\x07t\x02\x02\u019E\u019F\x07{\x02\x02\u019F`\x03\x02\x02\x02\u01A0" +
		"\u01A6\x07$\x02\x02\u01A1\u01A2\x07^\x02\x02\u01A2\u01A5\t\x04\x02\x02" +
		"\u01A3\u01A5\n\x05\x02\x02\u01A4\u01A1\x03\x02\x02\x02\u01A4\u01A3\x03" +
		"\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A9\u01B5\x07$\x02\x02\u01AA\u01B0\x07)\x02\x02\u01AB\u01AC" +
		"\x07^\x02\x02\u01AC\u01AF\t\x04\x02\x02\u01AD\u01AF\n\x06\x02\x02\u01AE" +
		"\u01AB\x03\x02\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\u01B2\x03\x02" +
		"\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1" +
		"\u01B3\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B5\x07)\x02" +
		"\x02\u01B4\u01A0\x03\x02\x02\x02\u01B4\u01AA\x03\x02\x02\x02\u01B5b\x03" +
		"\x02\x02\x02\u01B6\u01B9\x05g4\x02\u01B7\u01B9\x07a\x02\x02\u01B8\u01B6" +
		"\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BF\x03\x02\x02\x02" +
		"\u01BA\u01BE\x05g4\x02\u01BB\u01BE\x05i5\x02\u01BC\u01BE\t\x07\x02\x02" +
		"\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03" +
		"\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF" +
		"\u01C0\x03\x02\x02\x02\u01C0d\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02" +
		"\x02\u01C2\u01C3\x07.\x02\x02\u01C3f\x03\x02\x02\x02\u01C4\u01C5\t\b\x02" +
		"\x02\u01C5h\x03\x02\x02\x02\u01C6\u01C7\x042;\x02\u01C7j\x03\x02\x02\x02" +
		"\u01C8\u01CB\x05i5\x02\u01C9\u01CB\t\t\x02\x02\u01CA\u01C8\x03\x02\x02" +
		"\x02\u01CA\u01C9\x03\x02\x02\x02\u01CBl\x03\x02\x02\x02\u01CC\u01D1\t" +
		"\n\x02\x02\u01CD\u01CE\x07\x0F\x02\x02\u01CE\u01D1\x07\f\x02\x02\u01CF" +
		"\u01D1\x07\f\x02\x02\u01D0\u01CC\x03\x02\x02\x02\u01D0\u01CD\x03\x02\x02" +
		"\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D0" +
		"\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
		"\u01D4\u01D5\b7\x02\x02\u01D5n\x03\x02\x02\x02\u01D6\u01D7\x071\x02\x02" +
		"\u01D7\u01DA\x071\x02\x02\u01D8\u01DA\x07%\x02\x02\u01D9\u01D6\x03\x02" +
		"\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DE\x03\x02\x02\x02\u01DB" +
		"\u01DD\n\v\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02" +
		"\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E2" +
		"\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E3\x07\x0F\x02\x02" +
		"\u01E2\u01E1\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03" +
		"\x02\x02\x02\u01E4\u01E5\x07\f\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
		"\u01E7\b8\x03\x02\u01E7p\x03\x02\x02\x02\u01E8\u01E9\x071\x02\x02\u01E9" +
		"\u01EA\x07,\x02\x02\u01EA\u01EE\x03\x02\x02\x02\u01EB\u01ED\v\x02\x02" +
		"\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02\u01EE\u01EF" +
		"\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F1\x03\x02\x02\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F2\x07,\x02\x02\u01F2\u01F3\x07" +
		"1\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\b9\x03\x02\u01F5r\x03" +
		"\x02\x02\x02\x1D\x02\u0147\u014C\u014F\u0157\u015A\u015F\u0165\u0167\u016D" +
		"\u016F\u0173\u01A4\u01A6\u01AE\u01B0\u01B4\u01B8\u01BD\u01BF\u01CA\u01D0" +
		"\u01D2\u01D9\u01DE\u01E2\u01EE\x04\x02\x03\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ThriftLexer.__ATN) {
			ThriftLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ThriftLexer._serializedATN));
		}

		return ThriftLexer.__ATN;
	}

}

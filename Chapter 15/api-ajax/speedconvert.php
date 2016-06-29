<?php
/* An example web service written in PHP
 * File must be hosted on a PHP-enabled web server
 *
 * Converts speed to miles per hour, km per hour, feet per second, meters per second
 *
 * GET arguments:
 * speed=<number>
 * unit=<mph|kph|mps|fps>
 * format=<json|jsonp|xml|text>
 * callback=<function> (for jsonp only)
 * e.g. convertspeed.php?speed=10&units=mph
 *
 * returns all speed conversion values
 */

// fetch GET value
function fetch($name) {
	return (isset($_GET[$name]) ? $_GET[$name] : '');
}

// output values
$out = array(
	'mph' => null,
	'kph' => null,
	'fps' => null,
	'mps' => null
);

// factors from mph
$factor = array(
	'mph' => 1,
	'kph' => 1.609,
	'fps' => 1.467,
	'mps' => 0.447
);

// fetch speed
$speed = fetch('speed');
if (is_numeric($speed)) {
	$speed = (float) $speed;
}
else {
	$speed = 0;
}

// fetch unit
$unit = strtolower(fetch('unit'));
if (!array_key_exists($unit, $out)) {
	$unit = 'mph';
}

// starting speed
$out[$unit] = $speed;

// convert to mph
$out['mph'] = $speed * 1/$factor[$unit];

// convert other values
foreach ($out as $u => $v) {
	$out[$u] = round($out['mph'] * $factor[$u], 2);
}

// output correct format
switch (strtolower(fetch('format'))) {

	// plain text
	case 'text':
		header('Content-Type: text/plain; charset=UTF-8');
		foreach ($out as $n => $v) {
			echo $n, ':', $v, "\n";
		}
		break;
	
	// html
	case 'html':
		header('Content-Type: text/html; charset=UTF-8');
		echo "<table>\n";
		foreach ($out as $n => $v) {
			echo '<tr><th>', $n, '</th><td>', number_format($v,2), "</td></tr>\n";
		}
		echo '</table>';
		break;

	// output XML
	case 'xml':
		header('Content-Type: text/xml; charset=UTF-8');
		$xml = new SimpleXMLElement('<speed/>');
		array_walk($out, create_function('$i,$k', 'global $xml;$xml->addChild($k,$i);'));
		echo $xml->asXML();
		break;

	// output JSON-P
	case 'jsonp':
		header('Content-Type: application/javascript; charset=UTF-8');
		echo fetch('callback'), '(', json_encode($out), ');';
		break;

	// output JSON
	default:
		header('Content-Type: application/json; charset=UTF-8');
		echo json_encode($out);
		break;

}
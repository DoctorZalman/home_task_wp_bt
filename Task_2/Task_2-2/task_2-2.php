
<?php
$mass = [123, 22, 1333, 47, 12, 13, 245, 154, 74, 35, 68, 45, 1];
function desc_mass($mass)
{
	for ($i = 0; $i < count($mass); $i++) {
		for ($j = 0; $j < count($mass); $j++) {
			if ($mass[$i] > $mass[$j]) {
				$desc = $mass[$i];
				$mass[$i] = $mass[$j];
				$mass[$j] = $desc;
			}
		}
	}
	return $mass;
}
$new_mass = desc_mass($mass);
foreach ($new_mass as $value) {
	echo $value . ',';
}
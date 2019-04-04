average_temperature_in_c = {vancouver: 13.7, edmonton: 8.5, Calgary: 10.5};

average_temperature_in_f = average_temperature_in_c.keys.each_with_object({}) {|i,a| a[i] = average_temperature_in_c[i]* 9/5 +32}


# average_temperature_in_c.each {|key,value| {}[key] = }

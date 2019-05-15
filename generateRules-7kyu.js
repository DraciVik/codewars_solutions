// While creating IPtables rules to protect your server you want to write a function generateRules to help you with this. The function generateRules should take two arguments:

//     a function which takes 1 port argument and creates a single IPtables rule
//     an array with the ports for which the IPtables rules should be generated.

// The generateRules function should return one string with the iptables commands.

// This is how the generateRules function will be used:

// var myrules = generateRules(makeTCPRule, [22,80,443]);

// For this example the result would be this string (without linebreakings!):

// "iptables -I INPUT -p tcp --dport 22 -j ACCEPT ;
// iptables -I INPUT -p tcp --dport 80 -j ACCEPT ;
// iptables -I INPUT -p tcp --dport 443 -j ACCEPT ;"

// The makeTCPRule function is already provided for you and looks like this:

// function makeTCPRule(x){
//   return "iptables -I INPUT -p tcp --dport " + x + " -j ACCEPT ;";
// }

function generateRules(func, portList) {
        const rules = portList.map(port => `iptables -I INPUT -p tcp --dport ${port} -j ACCEPT ;`);
        return rules.join('');
}

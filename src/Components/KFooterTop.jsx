import React from "react";
import SupportIcon from "../Images/Konn3ct Images/support.png";
import ChangelogIcon from "../Images/Konn3ct Images/changelog.png";
import SecureIcon from "../Images/Konn3ct Images/secure.png";
import UptimeIcon from "../Images/Konn3ct Images/uptime.png";

const FooterTop = () => {
  return (
    <div className="w-full bg-white border-y border-gray-200 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-sm text-gray-800">
        {/* Item 1 */}
        <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
          <img src={SupportIcon} alt="Support" className="w-5 h-5" />
          <span className="font-medium">24/7 Support</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
          <img src={ChangelogIcon} alt="Changelog" className="w-5 h-5" />
          <span className="font-medium">Changelog</span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
          <img src={SecureIcon} alt="Secure" className="w-5 h-5" />
          <span className="font-medium">Secure and compliant</span>
        </div>

        {/* Item 4 */}
        <div className="flex items-center justify-center gap-2 py-4">
          <img src={UptimeIcon} alt="Uptime" className="w-5 h-5" />
          <span className="font-medium">99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
